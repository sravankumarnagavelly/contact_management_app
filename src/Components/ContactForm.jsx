import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="w-3/4 mx-auto my-8 pt-16">
  <h2 className="text-3xl font-semibold mb-6">New Contact Form</h2>
  <div className="mb-6">
    <label className="block font-semibold mb-2" htmlFor="first-name">
      First Name
    </label>
    <input
      className="w-full border border-gray-500 p-3 rounded-md"
      id="first-name"
      type="text"
      name="first_name"
      value={form.first_name}
      onChange={handleChange}
    />
  </div>
  <div className="mb-6">
    <label className="block font-semibold mb-2" htmlFor="last-name">
      Last Name
    </label>
    <input
      className="w-full border border-gray-500 p-3 rounded-md"
      id="last-name"
      type="text"
      name="last_name"
      value={form.last_name}
      onChange={handleChange}
    />
  </div>
  
  <div className="mb-6">
    <label className="block font-semibold mb-2" htmlFor="status">
      Status
    </label>
    <select
      className="w-full border border-gray-500 p-3 rounded-md"
      id="status"
      name="status"
      value={form.status}
      onChange={handleChange}
    >
      <option value={'active'}>Active</option>
      <option value={"inactive"}>Inactive</option>
    </select>
  </div>
  <button
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
    onClick={handleSave}
  >
    Save Contact
  </button>
</div>

    );
}


export default ContactForm