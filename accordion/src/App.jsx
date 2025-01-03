import Accordion from "./Accordion"
import data from "./faqsData"

function App() {
 
  return (
    <main>
     <h2>Accordion Project</h2>
     <p>If you are looking to create a new FAQ page for your business, the tips below can help you get started. Use these links to find what you are looking for in a pinch:</p>

<menu>
  {data.map((item)=> <Accordion key={item.id} {...item}/>)}
</menu>

    </main>
  )
}

export default App
