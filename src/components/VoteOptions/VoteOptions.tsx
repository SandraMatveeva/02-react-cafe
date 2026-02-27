import type { VoteType } from '../../types/votes'
import css from './VoteOptions.module.css'


interface VoteOptionsParams {
    onVote: (type: VoteType) => void,
    onReset: () => void,
    canReset:boolean
}

export default function VoteOptions(params: VoteOptionsParams){
    return <div className={css.container}>
        <button onClick={()=>params.onVote('good')} className={css.button}>Good</button>
        <button onClick={()=>params.onVote('neutral')} className={css.button}>Neutral</button>
        <button onClick={()=>params.onVote('bad')} className={css.button}>Bad</button>
        {params.canReset &&<button onClick={()=>params.onReset()}  
                disabled={!params.canReset} 
                className={`${css.button} ${css.reset}`}>Reset</button>}
    </div>
}
