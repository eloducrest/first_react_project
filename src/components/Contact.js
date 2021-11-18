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
            
            <div className="container">
                <div className="col-12 text-center">
                    <img src="https://images.unsplash.com/photo-1637153990786-dd881f5e381c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Contact;