import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    return (
        <section className='App'>
            <TwitterFollowCard userName="cristiano">
            Cristiano
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
            Miguel
            </TwitterFollowCard>

            <TwitterFollowCard userName="raayg26">
            Raúl
            </TwitterFollowCard>
        </section>
    )
}