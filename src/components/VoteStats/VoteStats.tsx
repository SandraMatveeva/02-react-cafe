import type { Votes } from '../../types/votes'
import css from './VoteStats.module.css'


interface VoteStatsProps {
    votes: Votes,
    totalVotes: number,
    positiveRate: number

}

export default function VoteStats (params: VoteStatsProps){
    return <div className={css.container}>
  <p className={css.stat}>Good: <strong>{params.votes.good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{params.votes.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{params.votes.bad}</strong></p>
  <p className={css.stat}>Total: <strong>{params.totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong>{params.positiveRate}%</strong></p>
</div>

}