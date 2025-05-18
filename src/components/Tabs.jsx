export default function Tabs({
  children,
  buttons,
  buttonContainer = "menu" /* default props = "menu" */,
}) {
  const ButtonContainer = buttonContainer;
  // componentin daha esnek olması için ButtonContainer'ı kullanıyoruz
  // buttonContainer ile buttonları sarmayalacak etiketi belirleyebiliriz
  // we use ButtonContainer to make the component more flexible
  // we can specify the tag that will wrap the buttons with buttonContainer

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
