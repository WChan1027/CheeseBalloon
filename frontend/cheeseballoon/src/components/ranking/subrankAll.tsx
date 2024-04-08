import style from "src/components/ranking/subrankAll.module.scss";
import Image from "next/image";
import aflogo from "public/svgs/afreeca.svg";
import chzlogo from "public/svgs/chzzk.svg";
import ArrowUp from "public/svgs/uparrow.png";
// import ArrowDown from "public/svgs/downarrow.png";
import nofav from "public/svgs/nofav.svg";
// import fav from "public/svgs/fav.svg";
import Link from "next/link";
import { LiveData } from "src/types/type";

type Props = {
  data: LiveData[] | undefined;
  title: string;
};

export default function SubrankAll({ data, title }: Props) {
  const RenderRank = title === "실시간 LIVE";
  return (
    <div className={style.container}>
      {data &&
        data.map((item, index) => (
          <div key={index} className={style.subitem}>
            {!RenderRank && (
              <>
                <div className={style.index}>{index + 4}</div>
                <div className={style.nameinfo}>
                  <div className={style.image}>
                    <Link href={`/detail/${item.streamId}`}>
                      <Image
                        src={item.profileUrl}
                        alt=""
                        width={48}
                        height={48}
                      />
                    </Link>
                  </div>
                  <div className={style.name}>
                    <Link
                      href={`/detail/${item.streamId}`}
                      className={style.link}
                    >
                      {item.name}
                    </Link>{" "}
                    {item.platform === "A" || item.platform === "S" ? (
                      <Image src={aflogo} alt="" width={14} height={14} />
                    ) : (
                      <Image src={chzlogo} alt="" width={14} height={14} />
                    )}
                  </div>
                </div>
                <div className={style.info}>
                  {item.viewerCnt.toLocaleString()} 명
                </div>
                <div className={style.fav}>
                  <Image src={nofav} alt="" width={20} height={20} />
                </div>
              </>
            )}
            {RenderRank && (
              <>
                <div className={style.liveindex}>{index + 4}</div>
                <div className={style.livenameinfo}>
                  <div className={style.image}>
                    <Link href={`/detail/${item.streamId}`}>
                      <Image
                        src={item.profileUrl}
                        alt=""
                        width={48}
                        height={48}
                      />
                    </Link>
                  </div>
                  <div className={style.livename}>
                    <Link
                      href={`/detail/${item.streamId}`}
                      className={style.link}
                    >
                      {item.name}
                    </Link>{" "}
                    {item.platform === "A" || item.platform === "S" ? (
                      <Image src={aflogo} alt="" width={14} height={14} />
                    ) : (
                      <Image src={chzlogo} alt="" width={14} height={14} />
                    )}
                  </div>
                </div>
                <div className={style.livetitleinfo}>{item?.title || ""}</div>
                <div className={style.livesubinfo}>
                  {item?.category || "리그 오브 레전드"}
                </div>
                <div className={style.liveinfo}>
                  {item.viewerCnt.toLocaleString()} 명
                </div>
                <div className={style.livefav}>
                  <Image src={nofav} alt="" width={20} height={20} />
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
