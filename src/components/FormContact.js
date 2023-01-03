import "./FormContact.css";

export const FormContact = () => {
  return (
    <form onSubmit="" className="contact-form">
      <fieldset className="fullname">
        <fieldset className="firstname">
          <label htmlFor="firstname">Nombre</label>
          <input type="name" id="firstname" name="firstname" />
        </fieldset>
        <fieldset className="lastname">
          <label htmlFor="lastname">Apellido</label>
          <input type="name" id="lasttname" name="lastname" />
        </fieldset>
      </fieldset>
      <fieldset className="contact-data">
        <fieldset className="email">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </fieldset>
        <fieldset className="subject">
          <label htmlFor="subject">Asunto</label>
          <input type="name" id="subject" name="subject" />
        </fieldset>
      </fieldset>
      <fieldset className="content">
        <fieldset className="text">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" />
        </fieldset>
        <button>Enviar</button>
      </fieldset>
    </form>
  );
};
