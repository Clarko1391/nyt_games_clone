
import Wordle from "./components/Wordle";

const Page = async () => {

  const API_ROUTE: string = 'https://api.npoint.io/a31387423ab409dcd98a'

  const secret_words: {words: string[]} = await fetch(API_ROUTE)
    .then(
      (res: any) => {
        console.log('query data: ', res)
        return res.json()
      }
    )
    .catch(
      (error: Error) => alert(error)
    )

  return (
    <Wordle secret_words={secret_words.words} />
  );
}

export default Page;