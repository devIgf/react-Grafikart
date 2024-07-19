// const LeNom = "title"
// const style = {color:'red', backgroundColor:"black"}
// const showTitle = true
const todos = [
      'Présenter react',
      'Présenter JSX',
      'Créer des composants'
]


function App() {
  
  return <>
    {/* {showTitle ? 
        <h1  id="title" className={LeNom} style={style}>{title}</h1> :
        <p>demo</p>
    } */}
    <Title color="blue" id="monid" className="demo" data-demo="demo" >Mon composant</Title>


    <input type="text" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In et voluptatem adipisci expedita animi enim, facilis molestiae id fugiat obcaecati dicta ducimus dolor aliquam, cumque tenetur voluptates! Vitae, quod velit!
    </p>
    <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title ({color,hidden,...props}){
  if (hidden) {
    return null
  }

  return <h1 style={{color: color}}{...props}></h1>
}

export default App
