import { useUpdate } from '../../contexts/UpdateContext';
import { Button } from '../buttons/Buttons';
import { ReadMoreContainer } from './styles';

const ReadMore = () => {
  const { setReadMore } = useUpdate();

  const handleClick = () => setReadMore(false);

  return (
    <ReadMoreContainer>
      <div>
        <h1>Read more</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum fugiat hic asperiores
          voluptate laboriosam voluptates unde minima assumenda possimus natus, non aliquam neque
          cumque excepturi veritatis sunt ea facere nemo ut. Atque quaerat quod rem amet qui
          consequuntur ut molestiae fuga aliquam dolore maiores eveniet et minima nulla, aspernatur
          repellendus.
        </p>
      </div>
      <Button.Outer>
        <Button onClick={handleClick}>ok</Button>
      </Button.Outer>
    </ReadMoreContainer>
  );
};

export default ReadMore;
