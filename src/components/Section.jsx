export default function Section({ children, title, ...props }) {
  return (
    // ...props -> spread operator
    // spread operator -> props nesnesindeki tüm özellikleri alır
    // ve bu özellikleri <section> etiketine ekler
    // spread operator -> props object takes all properties of the object
    // and adds them to the <section> tag
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
