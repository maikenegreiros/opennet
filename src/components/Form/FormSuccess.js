export default function FormSuccess(props) {
  return (
    <div>
      <p>{props.message || "Formulário enviado com sucesso!"}</p>
    </div>
  );
}
