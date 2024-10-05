import Image from "next/image";
import Link from "next/link";

export default function Photo() {
  return (
    <div>
      <Image
        src={
          "https://seeklogo.com/images/G/governer-sindh-logo-9968F934E2-seeklogo.com.png"
        }
        alt="img"
        height={50}
        width={50}
      />
      <div className="kamran_img">
        <Image
          src={
            "https://portal.governorsindh.com/_next/static/media/gov_kamran.1aeb2238.png"
          }
          alt="kamran"
          height={320}
          width={350}
        />
      </div>
      <div className="my h-80 w-200">
        <Image
          src={
            "https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/461392582_1083153470044934_2370783270715299469_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF39shQwuqnMPZ_7dixqM5NfVDpDjxuZbJ9UOkOPG5lsn2Z4wiYRD3h9cUPX_PQ6Q7r95PWkmdGFZ4mgLqdmsk2&_nc_ohc=E1FoX6hnTPcQ7kNvgFz2_VK&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=Aciv-43IP11EAQmSVTK_Wf1&oh=00_AYAqbwipnXzie2E443xhn59PRvORaAjw-y3Fck2Mhq8Gdg&oe=670042E1"
          }
          alt="mypic"
          width={130}
          height={100}
        />
      </div>
    </div>
  );
}
