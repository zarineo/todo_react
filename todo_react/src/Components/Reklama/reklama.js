const Reklama = ({title, text, link}) => {
  return <div className="reklama">
    <div className="rekl__title">
      {title}
    </div>
    <div className="rekl__text">
      {text}
    </div>
    <a href="{link}">{link}</a>
</div>;
}

export default Reklama;
