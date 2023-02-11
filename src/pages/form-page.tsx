import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"

const FormPage: React.FC<PageProps> = () => {
    React.useEffect(() => {
        const contentful = require('contentful')

        const client = contentful.createClient({
            space: 'h65mfv2bq0je',
            environment: 'master',
            accessToken: 'j-kEZS572WeWPeAC84lst38CFEivPHsdvbcfo1j_55M'
        })
        client.getEntries()
            .then((response: any) => setProducts(response.items))
            .catch(console.error)
    }, [])
    const [products, setProducts] = React.useState<any>([])
    console.log(products);
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const myForm = event.target;
        const formData: any = new FormData(myForm);

        fetch("/submitForm", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    return (
        <div className="container mt-3">
            <Link to="/">Go to home</Link>
            <form name="contact-new" method="post" onSubmit="submit" data-netlify="true" data-netlify-honeypot="bot-field" className="col-md-6" >
                <input type="hidden" name="form-name" value="contact-new" />
                <div className="mb-3">
                    <label className="form-label">Your Name: </label>
                    <input className="form-control" type="text" name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Email: </label>
                    <input className="form-control" type="email" name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Role:</label>
                    <select className="form-select" name="role">
                        <option value="leader">Leader - Role</option>
                        <option value="follower">Follower - Role</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message: </label>
                    <textarea className="form-control" name="message"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Send</button>
            </form>

        </div>
    )
}

export default FormPage

export const Head: HeadFC = () => <title>Form Page</title>
