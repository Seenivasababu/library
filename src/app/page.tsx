
import CreateBook from "./_components/CreateBook";
import ListBook from "./_components/ListBook";

export default async function Home() {
  return <>
    <ListBook/>
    <CreateBook/>
  </>
}