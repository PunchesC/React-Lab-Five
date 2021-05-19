import { ReactNode, useState, FormEvent, useContext } from 'react';
import {useHistory} from "react-router";
import {Story} from '../model/Story';
import {StoryContext} from '../Context/stories-context'

interface Props {
    story: Story;
}

function CreateStoryRoute({story}: Props) {
    const { words, title } = story;
    // const [title, setTitle] = useState("");
    // const [words, setWords] = useState("");
    const history = useHistory();
  
    const { addStory } = useContext(StoryContext);

    function handleSubmit(e:FormEvent){
      e.preventDefault();
      const story: Story ={
        title:title,
        words:words
      };
      addStory(story);
      history.push("/")

    }

    return (
        <form className="StoryForm" onSubmit={handleSubmit}>
            Last weekend, I saw
            <em>
                <strong>{" "}<input type ="text" value={words[0]} onChange={(e) =>(e.target.value)}></input>{" "}</strong>
            </em>
            at the
            <em>
                <strong>{" "}<input type ="text" value={words[1]} onChange={(e) => (e.target.value)}></input>{" "}</strong>
            </em>
            . I thought it was weird that from his pocket I saw a
            <em>
                <strong>{" "}<input type ="text" value={words[2]} onChange={(e) => (e.target.value)}></input>{" "}</strong>
            </em>
            poking out. They said they were looking for a
            <em>
                <strong>{" "}<input type ="text" value={words[3]} onChange={(e) => (e.target.value)}></input>{" "}</strong>
            </em>
            . Can't say I like em' to be honest.

            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateStoryRoute;