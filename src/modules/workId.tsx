import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import styles from '../../styles/WorkDetails.module.css'; // Importing the CSS module

const prisma = new PrismaClient();

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const work = await prisma.work.findUnique({
    where: { id },
    include: {
      publisher: true,
      user: true,
    },
  });

  return {
    props: { work },
  };
}

export default function WorkDetails({ work }: any) {
  return (
    <div className={`${styles.workDetailsContainer}`}>
      <div className={`${styles.workHeader}`}>
        <h1>{work.title}</h1>
        <p>{work.year}</p>
      </div>
      <div className={`${styles.workBody}`}>
        <Image src="/work-thumbnail.png" alt="Work Thumbnail" width={300} height={400} />
        <div className={`${styles.workInfo}`}>
          <h3>Publisher</h3>
          <p>{work.publisher.name}</p>
          <Image src={work.publisher.avatar || '/placeholder.png'} alt="Publisher Avatar" width={50} height={50} />
          <h3>Genre</h3>
          <p>{work.genre}</p>
          <h3>Author</h3>
          <p>{work.user.name}</p>
        </div>
      </div>
    </div>
  );
}
