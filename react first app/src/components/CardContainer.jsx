export default function CardContainer({name, description}) {
    return(
      <li>
        <p><strong>{name}</strong> {description}</p>
      </li>
    )
  }