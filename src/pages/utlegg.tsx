import {
  Check,
  ChevronLeft,
  ChevronRight,
  Minus,
  Pencil,
  Plus,
  Trash,
} from "lucide-react";
import validateAccountNumber from "norwegian-utils/validateAccountNumber";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import Datepicker, { type DateValueType } from "react-tailwindcss-datepicker";

interface Utlegg {
  id: string;
  utleggsdato: string;
  beskrivelse: string;
  sum: string;
  kvittering: string;
  status: string;
  endre: string;
}

const SampleData: Array<Utlegg> = [
  {
    id: "123456789",
    utleggsdato: "31.01.2024",
    beskrivelse: "Pizza",
    sum: "123,00 kr",
    kvittering: "Vis kvittering",
    status: "Til behandling",
    endre: "slett",
  },
  {
    id: "123456789",
    utleggsdato: "31.01.2024",
    beskrivelse: "Teamsosial",
    sum: "600,00 kr",
    kvittering: "Vis kvittering",
    status: "Refundert",
    endre: "",
  },
];

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Utlegg() {
  const [showWindow, setWindow] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);

  const mapToTable = (utlegg: Array<Utlegg>) => {
    return utlegg.map((u, index) => (
      <tr key={index.valueOf()} className="bg-white dark:bg-neutral-600">
        <td className="px-6 py-3 sm:px-3">{u.id}</td>
        <td className="px-4 py-3 sm:px-2">{u.utleggsdato}</td>
        <td className="px-20 py-3 sm:px-10">{u.beskrivelse}</td>
        <td className="px-10 py-3 sm:px-5">{u.sum}</td>
        <td className="px-6 py-3 text-blue-600 hover:underline sm:px-3">
          {u.kvittering}
        </td>
        <td
          className={`px-6 py-3 ${
            u.status === "Til behandling" ? "text-amber-300" : "text-green-500"
          }`}
        >
          {u.status}
        </td>
        <td className="px-4 py-3 text-blue-600 hover:underline">
          {u.status === "Til behandling" && (
            <>
              Rediger <Pencil />
            </>
          )}
        </td>
        <td className="px-4 py-3 text-rose-600 hover:underline">
          {u.status === "Til behandling" && (
            <>
              Slett <Trash />
            </>
          )}
        </td>
      </tr>
    ));
  };

  const handleClick = () => {
    setWindow(!showWindow);
    setConfirmation(false);
  };

  return (
    <div>
      {showConfirmation && (
        // Bekreftelse
        <div className="h-10 bg-green-700/20 text-center">
          <h1 className="text-green-700">Utlegget ditt har blitt registrert</h1>
        </div>
      )}
      <div className="mx-auto flex max-w-md flex-col items-center justify-center font-sans leading-relaxed md:max-w-2xl dark:text-gray-300">
        <h1 className="mx-3 mt-16 max-w-2xl text-center font-bold font-sans text-4xl text-vektor-darblue dark:text-gray-300">
          Utlegg
        </h1>
        <div className="mt-4 mb-10 text-xl">
          Her kan du registrere utlegg du har gjort for vektorprogrammet som du
          ønsker å få refundert. For å få refusjon må du laste opp en kvittering
          som bekrefter utlegget ditt.
        </div>

        <h1 className="mx-3 mt-2 max-w-2xl text-center font-bold font-sans text-2xl text-vektor-darblue dark:text-gray-300">
          Hva kan jeg få refundert?
        </h1>
        <div className="mt-4 mb-20 text-lg">
          {`Du kan typisk få refusjon for bussbilletter til og fra skole, kaffeposer til stand, kake til
              arrangementer og lignende. Det er ellers lurt å høre med en leder om du kan få utlegget ditt
              refundert før du legger ut. Om du har spørsmål kan du kontakte økonomiteamet på `}
          <a
            className="break-all text-vektor-darblue hover:underline"
            href="mailto:okonomi@vektorprogrammet.no"
          >
            okonomi@vektorprogrammet.no
          </a>
        </div>

        <h1 className="mx-3 mb-4 max-w-2xl text-center font-bold font-sans text-2xl text-vektor-darblue dark:text-gray-300">
          Mine utlegg
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center sm:items-center sm:justify-center lg:ml-60 lg:items-start">
          <button
            type="button"
            className={`mb-4 text-xl hover:font-semibold ${
              showWindow ? "text-blue-600" : "text-green-600"
            }`}
            onClick={handleClick}
          >
            {!showWindow || showConfirmation ? (
              <div className="flex items-center">
                <Plus size={20} /> <span>Nytt utlegg</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Minus className="mr-2" />
                <span>Skjul skjema</span>
              </div>
            )}
          </button>
        </div>
        {!showConfirmation && showWindow && (
          <NyttUtlegg
            showConfirmation={showConfirmation}
            setConfirmation={setConfirmation}
            setNew={handleClick}
          />
        )}
        <hr className="mx-10 h-px bg-slate-100 lg:m-auto lg:w-8/12" />
        <div className="mt-10 mb-20 flex justify-center">
          <table className="mx-10 block table-fixed divide-y divide-gray-300 overflow-x-auto border-t-2 border-b-2 text-left text-base dark:text-gray-300">
            <thead>
              <tr>
                <th className="w-1/12 bg-table-grey px-6 py-3 sm:px-3 dark:bg-neutral-700">
                  Id
                </th>
                <th className="w-1/12 bg-table-grey px-4 py-3 sm:px-2 dark:bg-neutral-700">
                  Utleggsdato
                </th>
                <th className="w-3/12 bg-table-grey px-20 py-3 sm:px-10 dark:bg-neutral-700">
                  Beskrivelse
                </th>
                <th className="w-2/12 bg-table-grey px-10 py-3 sm:px-5 dark:bg-neutral-700">
                  Sum
                </th>
                <th className="w-3/12 bg-table-grey px-6 py-3 sm:px-3 dark:bg-neutral-700">
                  Kvittering
                </th>
                <th className="w-3/12 bg-table-grey px-6 py-3 dark:bg-neutral-700">
                  Status
                </th>
                <th
                  className="w-1/12 bg-table-grey px-4 py-3 dark:bg-neutral-700"
                  aria-label="Empty Cell"
                />
                <th
                  className="w-1/12 bg-table-grey px-4 py-3 dark:bg-neutral-700"
                  aria-label="Empty Cell"
                />
              </tr>
            </thead>
            <tbody>{mapToTable(SampleData)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

type Inputs = {
  amount: number;
  description: string;
  receipt: File;
  bankAccountNumber: string;
};

const NyttUtlegg = (props: {
  showConfirmation: boolean;
  setNew: () => void;
  setConfirmation: Dispatch<SetStateAction<boolean>>;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [file, setFile] = useState(new File([""], "filename"));
  const [currentErrorMessage, setCurrentErrorMessage] = useState("");

  const handleDateValueChange = (value: DateValueType) => {
    setDateValue(value);
  };

  const validateDate = (date: Date) => {
    return date > new Date("01/01/2024");
  };

  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      amount: 0,
      description: "",
      receipt: new File([""], "filename"),
      bankAccountNumber: "0",
    },
  });

  // dirtyFields må brukes for at den skal oppdateres (minneoptimering react-hook-form)
  // console.assert(formState.dirtyFields || true);

  // "data" må legges til i onSubmit for å sende data til backend når den er klar. const onSubmit: SubmitHandler<Inputs> = (data) => {
  const onSubmit: SubmitHandler<Inputs> = () => {
    // const formData = { ...data, date: dateValue?.startDate };
    // send to backend here..
    // console.log("Form submitted with the following data:", formData);
  };

  const isCurrentInputValid = () => {
    const date = new Date(dateValue?.startDate?.toString() || "");
    switch (currentStep) {
      case 1:
        if (formState.errors.amount || !formState.dirtyFields.amount) {
          setCurrentErrorMessage("Beløp må være et positivt tall.");
          return false;
        }
        break;

      case 2:
        if (
          formState.errors.description ||
          !formState.dirtyFields.description
        ) {
          setCurrentErrorMessage(
            "Beskrivelse må være lengre enn to bokstaver.",
          );
          return false;
        }
        break;

      case 3:
        if (!validateDate(date)) {
          setCurrentErrorMessage(
            "Utleggsdato må være en gyldig dato etter 1. januar 2024 (DD-MM-YYYY).",
          );
          return false;
        }
        break;

      case 4:
        if (
          formState.errors.receipt ||
          file.name === "filename" ||
          !file.type.includes("image")
        ) {
          setCurrentErrorMessage("Kvittering må være et opplastet bilde.");
          return false;
        }
        break;

      case 5:
        if (formState.errors.bankAccountNumber) {
          setCurrentErrorMessage(
            "Kontonummer må være et gyldig norsk kontonummer.",
          );
          return false;
        }
        break;

      default:
        break;
    }
    setCurrentErrorMessage("");
    return true;
  };

  const stepToComponent = (step: number) => {
    const inputWrapper = (label: string, input: ReactNode) => (
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-bold">{label}</span>
        </label>
        {input}
      </div>
    );
    switch (step) {
      case 1:
        return inputWrapper(
          "Utleggsbeløp:",
          // Amount
          <input
            {...register("amount", { required: true, min: 1 })}
            type="number"
            id="amount"
            name="amount"
            placeholder="Beløp"
            className="input input-bordered input-secondary w-full text-sm sm:text-base"
          />,
        );
      case 2:
        return inputWrapper(
          "Utleggsbeskrivelse:",
          // Description
          <textarea
            {...register("description", { required: true, minLength: 2 })}
            id="description"
            name="description"
            placeholder="Beskrivelse"
            className="textarea textarea-secondary textarea-lg max-h-20 w-full max-w-xs text-sm sm:text-base"
          />,
        );
      case 3:
        return inputWrapper(
          "Dato for utlegg:",
          // Date
          <Datepicker
            value={dateValue}
            displayFormat="DD-MM-YYYY"
            asSingle
            useRange={false}
            onChange={handleDateValueChange}
            inputClassName="border border-vektor-darblue rounded-md w-full px-3 py-2 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-vektor-darblue focus:border-vektor-darblue text-sm sm:text-base"
          />,
        );
      case 4:
        return inputWrapper(
          "Bilde av kvittering:",
          // Receipt Upload
          <input
            {...register("receipt", { required: true })}
            type="file"
            id="receipt"
            name="receipt"
            accept="image/*"
            multiple={false}
            onChange={(e) => setFile(e.target.files![0])}
            form="disbursementForm"
            className="file-input file-input-bordered file-input-md input-secondary w-full"
          />,
        );
      case 5:
        return inputWrapper(
          "Utbetalingskonto:",
          // Bank Account Number
          <input
            {...register("bankAccountNumber", {
              required: true,
              validate: validateAccountNumber,
            })}
            type="text"
            id="bankAccountNumber"
            name="bankAccountNumber"
            className="input input-bordered input-md input-secondary w-full"
            placeholder="Kontonummer"
          />,
        );
      case 6:
        return (
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-vektor-darblue">
              Bekrefte utlegg?
            </h1>
            {
              // Confirm
              <button
                type="submit"
                onClick={handleConfirm}
                className="btn btn-success btn-md m-6"
                hidden={currentStep !== 6}
              >
                <span>Bekreft</span>
                <Check className="pl-4" />
              </button>
            }
          </div>
        );
      default:
        break;
    }
    return <div />;
  };

  const handleConfirm = () => {
    const { showConfirmation, setConfirmation, setNew } = props;
    setConfirmation(!showConfirmation);
    setNew();
  };

  const handleNext = () => {
    if (isCurrentInputValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center font-sans leading-relaxed md:max-w-2xl">
      <form
        id="disbursementForm"
        name="disbursementForm"
        className="my-16 flex w-5/6 flex-col rounded-xl bg-vektor-blue pt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="m-6 h-36 w-11/12 justify-center self-center rounded-t-xl px-3">
          <img
            className="-mt-6 float-right hidden w-1/4 md:block"
            src="images/team/OkonomiTor.png"
            alt=""
          />
          {stepToComponent(currentStep)}
          <p className="m-1 my-4 w-full max-w-xs text-red-600 text-sm">
            {currentErrorMessage}
          </p>
        </div>
        <div className="flex justify-around space-x-6 rounded-b-xl bg-slate-800 py-5">
          {
            // Back
            <button
              type="button"
              onClick={handlePrevious}
              className="btn btn-md"
              disabled={currentStep === 1}
            >
              <ChevronLeft className="pr-4 text-white" />
              <span>Forrige</span>
            </button>
          }
          {
            // Next
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-md hidden"
              disabled={currentStep === 6}
            >
              <span>Neste</span>
              <ChevronRight className="pl-4 text-white" />
            </button>
          }
        </div>
      </form>
    </div>
  );
};
