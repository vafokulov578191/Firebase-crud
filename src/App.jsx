import { useEffect, useState } from 'react';
import './App.scss';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, } from './firebase';
import Modalbg from './Modalbg';


function App() {
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
  const userCollections = collection(db, "users")


  useEffect(() => {
    const getUser = async () => {
      const res = await getDocs(userCollections)
      setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUser()
  }, [])

  // Get method

  const hadleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await addDoc(collection(db, "users"), {
        name: title,
        time: new Date().getMinutes()
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  // Add method

  const handleDelete = async (e) => {
    let id = e.target.parentNode.id
    try {
      await deleteDoc(doc(db, "users", id))
      setData(data.filter((item) => item.id !== id))
    } catch (err) {
      console.log(err);
    }
  }

  // delete Method

  return (
    <div className="App">
      <div className="countainer">
        <h1>To-do List</h1>

        <div className="main">
          <div className="top_main">
            <form className='form' onSubmit={hadleSubmit}>
              <input onChange={(e) => setTitle(e.target.value)} placeholder='title' className='inp' type="text" />
              <button type='submit' className='btn'>Add</button>
            </form>
          </div>

          <div className="item">
            {
              data.map((item) => (
                <>
                  <div className="block">
                    <div className="user">
                      <span className='name'>{item.name}</span>
                    </div>
                    <div className="actions" id={item.id}>
                      <div className="del" onClick={handleDelete}>
                        delete
                      </div>
                    </div>
                  </div>
                  <div className='modalokno'>
                    <Modalbg props={item.id} name={item.name} />
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
