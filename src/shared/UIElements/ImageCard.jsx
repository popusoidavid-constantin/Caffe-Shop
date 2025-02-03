import "./ImageCard.css";

export default function ImageCard(props) {
  return (
    <div className="image-container">
      <img src={props.image} className={props.className} alt={props.alt} />
    </div>
  );
}
