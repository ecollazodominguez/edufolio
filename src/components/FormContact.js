// import "./FormContact.css";

export const FormContact = () => {
  return (
    <form onSubmit="" className="contact-form">
      <fieldset className="fullname">
        <label htmlFor="firstname">Nombre</label>
        <input type="name" id="firstname" name="firstname" />
        <label htmlFor="lastname">Apellido</label>
        <input type="name" id="lasttname" name="lastname" />
      </fieldset>
      <fieldset className="subject">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="subject">Asunto</label>
        <input type="name" id="subject" name="subject" />
      </fieldset>
      <fieldset className="text">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" />
        <button>Enviar</button>
      </fieldset>
    </form>
  );
};
