/** @jsx h */
import { h } from "preact"
import Layout from '../components/layouts.tsx';
import {tw} from "@twind";

export default function index() {
  return (
    <Layout>
        <h1 class={tw`text-2xl text-center`}>Welcome to index page</h1>
    </Layout>
  )
}
