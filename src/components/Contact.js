function Contact() {
    return (
        <div className="Contact">

            <div className="container contact-form">
                <div className="contact-image">
                    <i className="fas fa-rocket fa-bounce"></i>
                </div>
                <form method="post">
                    <h3>Envoyez-nous un message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Nom"
                                       value=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Email"
                                       value=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control"
                                       placeholder="Téléphone" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btn-main" value="Envoyer"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Votre message"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact;