import { styled } from 'styled-components';
import { flexMixin, fontMixin } from '../styled';
import { gray, tagColor } from '../styled';

const ContentContainer = styled.div`
  ${flexMixin({ direction: 'column', align: 'flex-start', gap: '5' })}
  margin-bottom: 20px;
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${fontMixin({ size: '12px' })}
    font-size: 12px;
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${fontMixin({ size: '18', weight: '600' })}
  }
  p {
    ${fontMixin({ size: '12' })}
    color: ${gray};
  }
`;

function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}

export default Content;
