export default function FormSuccess(props) {
  return (
    <div>
      <p>{props.message || "Erro ao enviar formulário! Tente novamente."}</p>
    </div>
  );
}
