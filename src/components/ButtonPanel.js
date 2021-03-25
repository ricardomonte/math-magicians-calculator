import Button from './Button';

function ButtonPanel() {
  const namesButtons = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  const arrKeys = Object.keys(namesButtons);
  const buttons = arrKeys
    .map((key) => namesButtons[key].map((element) => <Button key={element} name={element} />));
  return (
    <>
      { buttons.map((groupButton, i) => <div key={arrKeys[i]}>{groupButton}</div>) }
    </>
  );
}

export default ButtonPanel;
