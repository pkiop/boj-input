import styled from '@emotion/styled';
import Link from './Link';

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;

  .info-text {
    .title {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .link {
      font-size: 2rem;
    }
  }
`;

function Info() {
  return (
    <InfoBlock>
      <div className='info-text'>
        <div className='title'>
          A+B <span>(1000)</span>
        </div>
        <Link href='#'>문제 링크</Link>
      </div>
      <input placeholder='번호 입력' />
    </InfoBlock>
  );
}

export default Info;
