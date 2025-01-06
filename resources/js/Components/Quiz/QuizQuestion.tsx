import {QuizQuestion, QuizQuestionType} from "@/Models/quiz";
import {Tag} from "@/Models/tag";
import {useEffect, useState} from "react";
import HoverLabel from "@/Components/Forms/HoverLabel";
import RangeSlider from "@/Components/Buttons/slider";
import {Paragraphize, Titleize} from "@/Functions/strings";

function tagFormatter(s: string): string {
    if (s.startsWith("moeilijkheid_")) {
        s = s.substring("moeilijkheid_".length);
    }

    if (s.startsWith("uithoudingsvermogen_")) {
        s = s.substring("uithoudingsvermogen_".length)
    }

    return s
}

export function formatQuizQuestion(question: QuizQuestion, f: (tag: Tag, weight: number) => void) {
    switch (question.type) {
        case QuizQuestionType.MULTI:
            return <MultiQuizQuestion question={question} f={f}  />
        case QuizQuestionType.RANGE:
            return <RangeQuizQuestion question={question} f={f} />
    }

    throw new Error("Question of unknown type: " + question.type)
}

type QuizProps = {
    question: QuizQuestion;
    f: (tag: Tag, weight: number) => void;
}

function MultiQuizQuestion(props: QuizProps) {
    const question = props.question as QuizQuestion;
    const tags = question.data as Tag[];

    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const handleCheckboxChange = (tag: Tag) => {
        const includes = selectedTags.includes(tag);
        const weight = includes ? 5 : 0;
        props.f(tag, weight);

        setSelectedTags((prev) =>
            includes ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">{Titleize(question.label)}</h2>
            <p className="text-gray-600 mb-4">{Paragraphize(question.description)}</p>

            <div className="space-y-2 text-3xl mb-8">
                {tags.map((tag: Tag, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer border border-gray-200">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleCheckboxChange(tag)}
                        />
                        <HoverLabel text={tagFormatter(tag.name)} hoverText={tag.description}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RangeQuizQuestion(props: QuizProps) {
    const question = props.question as QuizQuestion;
    const tag = props.question.data as Tag;

    const [weight, setWeight] = useState<number>(0);
    useEffect(() => {
        props.f(tag, weight);
    }, [weight]);

    return (
        <div className="space-y-4 text-4xl">
            <h2 className="text-xl font-semibold text-blue-500">{question.label}</h2>
            <p className="text-gray-600 mb-4 text-blue-500">{question.description}</p>

            <div className="flex flex-col space-y-4">
                <HoverLabel text={tagFormatter(tag.name)} hoverText={tag.description}/>
                <div className="flex flex-row space-x-5 justify-center items-center">
                    <div>0</div>
                    <RangeSlider
                        min={0}
                        max={5}
                        step={1}
                        value={[weight]}
                        formatValue={(i) => `${i}`}
                        label={tagFormatter(tag.name)}
                        onChange={(value: number[]) => {
                            const v = value.length > 0 ? value[0] : 0;
                            setWeight(v);
                        }}
                    />
                    <div>5</div>
                </div>
            </div>
        </div>
    );
}
