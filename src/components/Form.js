import {useState} from "react";

export const handleSubmit = (event, onSuccess, onError = alert) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
        // this is copied from Netlify
        // be careful before you change it
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString(),
    })
        .then(onSuccess)
        .catch((error) => onError(error));
};

export function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => handleSubmit(e, () => alert(
                "Thanks for letting me know. I will reach out as soon as possible!"
            ))}
        >
            <label>Your Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Your Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
        </form>
    )
}
