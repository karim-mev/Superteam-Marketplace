import Image from "next/image";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { retardios } from "@/lib/config";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 gap-4">
        {retardios.map((col) => (
          <Card>
            <CardHeader className="p-0 mb-">
              <Image
                src={col.img}
                alt=""
                width={280}
                height={280}
              />
            </CardHeader>
            {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
            <CardFooter className="py-3 pl-3">
              <div className="flex flex-col gap-">
                <p className="flex text-sm text-gray-500 font-semibold mb-2">
                  {col.id}
                </p>
                <p>{col.price} SOL</p>
                <p className="text-sm text-gray-500">{col.prevPrice} SOL</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
