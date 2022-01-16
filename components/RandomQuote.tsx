import { getQuote } from "@lib/getQuote";
import { Page } from "./utils/Page";
import QuotePage from "./pages/QuotePage";

export default function RandomQuote(){
    return <Page><QuotePage quote={getQuote()}/></Page>
}