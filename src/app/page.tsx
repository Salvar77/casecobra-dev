import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="snake"
                  className="w-full"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Twoje zdjęcie na{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Etui na Telefon
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Uchwyć swoje ulubione wspomnienia dzięki swojemu{" "}
                <span className="font-semibold">jedynemu w swoim rodzaju</span>{" "}
                etui na telefon. CaseCobra pozwala chronić Twoje wspomnienia,
                nie tylko obudowę telefonu.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Wytrzymały materiał
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    5-letnia gwarancja na nadruk
                  </li>

                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Obsługuje nowoczesne modele iPhoneów
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    src="/users/user-1.png"
                    alt="zdjęcie użytkownika"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    width={300}
                    height={300}
                  />
                  <Image
                    src="/users/user-2.png"
                    alt="zdjęcie użytkownika"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    width={300}
                    height={300}
                  />
                  <Image
                    src="/users/user-3.png"
                    alt="zdjęcie użytkownika"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    width={300}
                    height={300}
                  />
                  <Image
                    src="/users/user-4.jpg"
                    alt="zdjęcie użytkownika"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    width={300}
                    height={300}
                  />
                  <Image
                    src="/users/user-5.jpg"
                    alt="zdjęcie użytkownika"
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> zadowolonych
                    klientów
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="twoje zdjęcie"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                width={200}
                height={200}
              />
              <Image
                alt="twoje zdjęcie"
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                width={200}
                height={200}
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>

        {/* {value proposition section} */}
        <section className="bg-slate-100 py-24 ">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Co mówią nasi{" "}
                <span className="relative px-2">
                  klienci{" "}
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                </span>
              </h2>
              <Image
                src="/snake-2.png"
                alt="zdjęcie węża"
                className="w-24 order-0 lg:order-2"
                width={200}
                height={200}
              />
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    Etui jest bardzo solidne, a design przyciąga wzrok – znajomi
                    od razu zwrócili na nie uwagę! Mam je już od trzech miesięcy
                    i{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      nadruk wygląda jak nowy
                    </span>
                    . W przypadku innych etui, które miałem wcześniej, grafika
                    szybko się ścierała, ale tutaj nic takiego się nie dzieje.
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src="/users/user-1.png"
                    alt="użytkownik"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Jonathan</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Zweryfikowany Zakup</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* {second user review} */}
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    Etui świetnie leży w dłoni i naprawdę dobrze chroni telefon.{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      Kolory nadruku są żywe i intensywne
                    </span>
                    , a po kilku tygodniach użytkowania nie widać żadnych oznak
                    zużycia. To zdecydowanie najlepsze etui, jakie miałem do tej
                    pory!
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src="/users/user-4.jpg"
                    alt="użytkownik"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Josh</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Zweryfikowany Zakup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>

          <div className="pt-16 ">
            <Reviews />
          </div>
        </section>

        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  Wgraj swoje zdjęcie i{" "}
                  <span className="relative px-2 bg-green-600 text-white">
                    zdobądź swoje etui{" "}
                  </span>{" "}
                  <br />
                  teraz.
                </h2>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                <Image
                  src="/arrow.png"
                  className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                  alt="strzałka"
                  width={200}
                  height={200}
                />

                <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                  <Image
                    src="/horse.jpg"
                    className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                    alt="koń"
                    width={200}
                    height={200}
                  />
                </div>

                <Phone className="w-60" imgSrc="/horse_phone.jpg" />
              </div>
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <li className="w-fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Wysokiej jakości silikonowe tworzywo
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Powłoka odporna na zarysowania i odciski palców
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                Kompatybilna z ładowaniem bezprzewodowym
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                5-letnia gwarancja na wydruk
              </li>

              <div className="flex justify-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/configure/upload"
                >
                  Stwórz swoje etui już teraz!{" "}
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </div>
    </div>
  );
}
