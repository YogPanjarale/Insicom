import { getQuote } from "@lib/getQuote";
import { Page } from "./Page";
import QuotePage from "./QuotePage";

export default function RandomQuote(){
    return <Page><QuotePage quote={getQuote()}/></Page>
}