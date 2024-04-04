import {useQuery} from "@tanstack/react-query";
import axios from "axios";

// importing necessary components
import Quote from "./Components/Quote/Quote.jsx";

// rapid api 
const options = {
  method: 'GET',
  url: 'https://random-quote-generator2.p.rapidapi.com/randomQuote',
  headers: {
    'X-RapidAPI-Key': 'api-key',
    'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
  }
};



function App() {
  // state to store the quote
  const {isPending, data, error, refetch} = useQuery({
    queryKey: ["quote"],
    queryFn: fetchQuote,
  })


  // function to generate a random quote
  async function fetchQuote() {
    try {
      const response = await axios.request(options);
      return await response.data;
    } catch(error) {
      console.error(error);
    }
  }

  function generateQuote() {
    refetch();
  }

  if(isPending) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>

  return (
    <>

        {/* layout */}
        <h1 className="text-blue-700 text-center text-4xl font-semibold mt-2">Random quote generator</h1>

        <p className="text-center text-lg mt-5">Click the button below to generate a random quote</p>

        <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto" onClick={generateQuote}>Generate</button>

        {/* early version*/}

        {/* <section className="mt-10 bg-amber-500 rounded w-fit mx-auto">
          <p>This is where the quote will be displayed</p>
          <p>Author</p>
        </section> */}


        {/* Quote component */}
        {/* <section className="border border-gray-300 p-3 mt-9 mx-20">
          <p className="w-fit py-2 px-auto mx-auto font-serif text-xl italic">
            {"\""}{`quote will be displayed here`}{"\""}
            <p className="text-gray-600">-Author</p>
          </p>
        </section> */}

        
        {
          data && <Quote data={data}/>
        }
    </>
  )
}

export default App
