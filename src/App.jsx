import ModalImage from "react-modal-image";
import './App.css'  

function App() {
  return (
    <>
      <h1 className="text-gray-200">Moving Sale at C2-503</h1>
      <table className="table table-compact w-full flex-auto">
        <thead>
          <tr>
            <th>Name & Price</th>
            <th>Description</th>
            <th>Photos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TV Unit<br/>INR 2000</td>
            <td>TV Unit with storage (LxBxW)</td>
            <td>
              <div>
                <ModalImage small="https://i.imgur.com/hvYicUM.jpeg" large="https://i.imgur.com/hvYicUM.jpeg" alt="TV Unit" className="w-32 h-32"/>
                <ModalImage small="https://i.imgur.com/PdTxbXw.jpeg" large="https://i.imgur.com/PdTxbXw.jpeg" alt="TV Unit" className="w-32 h-32"/>
              </div>
            </td>
          </tr>
          <tr>
            <td>Dining Table<br/>INR 3000</td>
            <td>Dining Table with 4 chairs (LxBxW)</td>
            <td>
              <ModalImage small="https://i.imgur.com/FoqpFAa.jpeg" large="https://i.imgur.com/FoqpFAa.jpeg" alt="Dining Table" className="w-32 h-32" />
            </td>
          </tr>
          <tr>
            <td>CAT Bookset (Set of 3)<br/>INR 1000</td>
            <td>CAT Quantitative Aptitude by McGrawHill<br/>CAT Verbal Ability & Reading Comprehension by McGrawHill<br/>CAT Data Interpretation & Logical Reasoning by McGrawHill</td>
            <td>
              <ModalImage small="https://i.imgur.com/PdTxbXw.jpeg" large="https://i.imgur.com/PdTxbXw.jpeg" alt="TV Unit" className="w-32 h-32" />
            </td>
          </tr>
          <tr>
            <td>CAT Bookset (Set of 3)<br/>INR 1000</td>
            <td>CAT Quantitative Aptitude by McGrawHill<br/>CAT Verbal Ability & Reading Comprehension by McGrawHill<br/>CAT Data Interpretation & Logical Reasoning by McGrawHill</td>
            <td>
              <ModalImage small="https://i.imgur.com/PdTxbXw.jpeg" large="https://i.imgur.com/PdTxbXw.jpeg" alt="TV Unit" className="w-32 h-32" />
            </td>
          </tr>
        </tbody>
      </table>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p>Call or Whatsapp: +91 7827967303</p>
        </div>
      </footer>
    </>
  )
}

export default App
