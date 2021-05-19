import './StoriesRoute.css'
import {useContext} from 'react'
import {Link} from "react-router-dom";
import {StoryContext} from '../Context/stories-context'


export function StoriesRoute(){
  const {stories} = useContext(StoryContext);
  
  return (
    <div className="StoriesRoute">
      {stories.map((story,i)=>(
        <li key={i}>
          <Link to={`/stories/${i}`}>{story.title}</Link>{" "}
         
        </li>
      ))}
    </div>
  )
  
}

