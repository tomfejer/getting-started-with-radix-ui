import React, { useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Toast from "@radix-ui/react-toast";

import "./styles.css";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";

import * as Select from "@radix-ui/react-select";
import * as Label from "@radix-ui/react-label";
import * as Switch from "@radix-ui/react-switch";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as HoverCard from "@radix-ui/react-hover-card";

const countriesArray = [
  "France",
  "United Kingdom",
  "Spain",
  "Hungary",
  "Netherlands",
  "Italy",
  "Germany",
  "Japan",
  "Denmark"
];

const fruitsArray = ["Apple", "Orange", "Lemon", "Melon"];

export default function App() {
  const [selectDemoValue, setSelectDemoValue] = useState(countriesArray[0]);
  const [switchDemoValue, setSwitchDemoValue] = useState(true);
  const [checkboxDemoValue, setCheckboxDemoValue] = useState(true);
  const [radioGroupDemoValue, setRadioGroupDemoValue] = useState("default");

  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="App">
      <Toast.Provider>
        <div className="Header">
          <HoverCard.Root
            className="HoverCard"
            openDelay="1000"
            // defaultOpen={true}
          >
            <HoverCard.Trigger>
              <Avatar.Root className="Avatar">
                <Avatar.Image
                  className="AvatarImage"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
              </Avatar.Root>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="HoverCardContent"
              sideOffset={0}
              alignOffset={0}
              side="bottom"
              align="end"
            >
              <div className="HoverCardImage" />
              <span className="HoverCardText">
                <p>Colm Tuite</p>
                <p className="Label Caption">colm.tuite@email.com</p>
              </span>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div className="Sidebar">
          <h1 className="SidebarH1">Sidebar</h1>

          <div className="SelectMenuWrapper">
            <Label.Root
              htmlFor="sampleSelectMenu"
              className="Label"
              id="sampleSelectMenuLabel"
            >
              Select menu title
            </Label.Root>
            <Select.Root
              value={selectDemoValue}
              onValueChange={setSelectDemoValue}
            >
              <Select.Trigger className="SelectTrigger" id="sampleSelectMenu">
                <Select.Value aria-label={selectDemoValue}>
                  {countriesArray[selectDemoValue]}
                </Select.Value>
                <Select.Icon>
                  <ChevronDownIcon className="ChevronIcon" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="SelectContent">
                <Select.ScrollUpButton className="SelectScrollButtonStyles">
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="SelectViewport">
                  <Select.Group>
                    <Select.Label className="SelectLabel">
                      Countries
                    </Select.Label>
                    {countriesArray.map((address) => (
                      <Select.Item value={address} className="SelectItem">
                        <Select.ItemIndicator className="SelectItemIndicator">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>{address}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Group>

                  <Select.Separator className="SelectSeparator" />

                  <Select.Group>
                    <Select.Label className="SelectLabel">Fruits</Select.Label>
                    {fruitsArray.map((address) => (
                      <Select.Item value={address} className="SelectItem">
                        <Select.ItemIndicator className="SelectItemIndicator">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>{address}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="SelectScrollButtonStyles">
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Root>
          </div>

          <hr className="SidebarSeparator" />

          <Label.Root htmlFor="AirplaneModeSwitch" className="Label">
            Switch title
          </Label.Root>

          <div className="SwitchWrapper" id="AirplaneModeSwitch">
            <Switch.Root
              className="Switch"
              id="sampleSwitch"
              onCheckedChange={setSwitchDemoValue}
              checked={switchDemoValue}
            >
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
            <Label.Root htmlFor="sampleSwitch" className="LabelInline">
              Airplane mode
            </Label.Root>
          </div>

          <hr className="SidebarSeparator" />

          <div className="CheckboxWrapper">
            <Checkbox.Root
              className="Checkbox"
              id="sampleCheckbox"
              checked={checkboxDemoValue}
              onCheckedChange={setCheckboxDemoValue}
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root className="LabelInline" htmlFor="sampleCheckbox">
              Accept terms and conditions.
            </Label.Root>
          </div>

          <hr className="SidebarSeparator" />
          <form>
            <RadioGroup.Root
              defaultValue="default"
              aria-label="View density"
              className="RadioGroup"
              value={radioGroupDemoValue}
              onValueChange={setRadioGroupDemoValue}
            >
              <div className="RadioGroupItemWrapper">
                <RadioGroup.Item
                  value="default"
                  id="r1"
                  className="RadioGroupItem"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                  <img
                    src="https://source.unsplash.com/featured/?default"
                    alt="default"
                    className="RadioGroupItemImageCover"
                  />
                </RadioGroup.Item>
                <Label.Root htmlFor="r1" className="RadioLabel">
                  Default
                </Label.Root>
              </div>
              <div className="RadioGroupItemWrapper">
                <RadioGroup.Item
                  value="comfortable"
                  id="r2"
                  className="RadioGroupItem"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                  <img
                    src="https://source.unsplash.com/featured/?comfortable"
                    alt="default"
                    className="RadioGroupItemImageCover"
                  />
                </RadioGroup.Item>
                <Label.Root htmlFor="r2" className="RadioLabel">
                  Comfortable
                </Label.Root>
              </div>
              <div className="RadioGroupItemWrapper">
                <RadioGroup.Item
                  value="compact"
                  id="r3"
                  className="RadioGroupItem"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                  <img
                    src="https://source.unsplash.com/featured/?compact"
                    alt="default"
                    className="RadioGroupItemImageCover"
                  />
                </RadioGroup.Item>
                <Label.Root htmlFor="r3" className="RadioLabel">
                  Compact
                </Label.Root>
              </div>
            </RadioGroup.Root>
          </form>

          <hr className="SidebarSeparator" />

          <button
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpen(true);
              }, 100);
            }}
          >
            Add to calendar
          </button>
        </div>
        <div className="StateMonitor">
          <span className="Label Caption">Select menu value:</span>
          <span className="Label">{selectDemoValue}</span>
          <span className="Label Caption">Switch value:</span>
          <span className="Label">
            {switchDemoValue === true ? "ON" : "OFF"}
          </span>
          <span className="Label Caption">Checkbox value:</span>
          <span className="Label">
            {checkboxDemoValue === true ? "ON" : "OFF"}
          </span>
          <span className="Label Caption">Radio group value:</span>
          <span className="Label">{radioGroupDemoValue}</span>
        </div>
        <Toast.Root className="Toast" open={open} onOpenChange={setOpen}>
          <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
          <Toast.Description asChild>
            <time dateTime={eventDateRef.current.toISOString()}>
              {prettyDate(eventDateRef.current)}
            </time>
          </Toast.Description>
          <Toast.Action asChild altText="Goto schedule to undo">
            <button>Undo</button>
          </Toast.Action>
          <Toast.Close>⨉</Toast.Close>
        </Toast.Root>

        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  );
}

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(date);
}
