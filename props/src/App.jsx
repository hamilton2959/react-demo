//props = read-only properties that are shared between components
//        A parent component can send data to a child component
//        <Component key=value />


import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Hamilton" age={30} isStudent={true} />
      <Student name="Henry" age={42} isStudent={false} />
      <Student name="Wash" age={67} isStudent={false} />
      <Student name="Kenny" age={19} isStudent={true} />
      <Student name="Jonny" />
    </>
  );
}

export default App
