import { Box } from "@/components";
import {
  Fieldset,
  Legend,
  Field,
  Label,
  Input,
  Description,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

export const FirstFormPage = () => {
  const [form, setForm] = useState({
    name: "",
    nationality: "Peru",
    about: "",
  });

  console.count("FirstFormPage render");

  return (
    <Box tag="form" className="grid place-content-center h-full my-10">
      <Fieldset className="space-y-6 sm:max-w-72 sm:min-w-72 rounded-xl">
        <Legend className="text-base/7 font-semibold text-gray-600">
          Personal Information
        </Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-gray-600">Names</Label>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-gray-600/5 py-1.5 px-3 text-sm/6 text-gray-600",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-gray-600">
            Nationality
          </Label>
          <div className="relative">
            <Select
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border-none bg-gray-600/5 py-1.5 px-3 text-sm/6 text-gray-600",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                "*:text-black"
              )}
              value={form.nationality}
              onChange={(e) => {
                setForm({ ...form, nationality: e.currentTarget.value });
              }}
            >
              <option value="Canada">Canada</option>
              <option value="Peru">Peru</option>
              <option value="United States">United States</option>
            </Select>
          </div>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-gray-600">
            About yourself
          </Label>
          <Description className="text-sm/6 text-gray-600/50">
            Brief description of yourself!
          </Description>
          <Textarea
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-gray-600/5 py-1.5 px-3 text-sm/6 text-gray-600",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
          />
        </Field>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-cyan-700 text-white font-medium rounded-lg py-2"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Save
        </Button>
      </Fieldset>
      <Box tag="picture" className="mt-8 bg-gray-600/5 p-5">
        <JsonView
          theme="atom"
          displaySize="collapsed"
          collapseStringsAfterLength={18}
          src={form}
        />
      </Box>
    </Box>
  );
};
