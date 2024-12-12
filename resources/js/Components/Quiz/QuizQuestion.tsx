import {QuizQuestion, QuizQuestionType} from "@/Models/quiz";
import {Tag} from "@/Models/tag";
import {useState} from "react";
import HoverLabel from "@/Components/Forms/HoverLabel";
import RangeSlider from "@/Components/Buttons/slider";
import {Paragraphize, Titleize} from "@/Functions/strings";

export function formatQuizQuestion(question: QuizQuestion) {
    switch (question.type) {
        case QuizQuestionType.MULTI:
            return <MultiQuizQuestion question={question}  />
        case QuizQuestionType.RANGE:
            return <RangeQuizQuestion question={question} />
    }

    throw new Error("Question of unknown type: " + question.type)
}

function MultiQuizQuestion(props: {question: QuizQuestion }) {
    const question = props.question as QuizQuestion;
    const tags = question.data as Tag[];

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleCheckboxChange = (tagName: string) => {
        setSelectedTags((prev) =>
            prev.includes(tagName)
                ? prev.filter((name) => name !== tagName)
                : [...prev, tagName]
        );
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">{Titleize(question.label)}</h2>
            <p className="text-gray-600 mb-4">{Paragraphize(question.description)}</p>

            <div className="space-y-2">
                {tags.map((tag: Tag, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer border border-gray-200">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={selectedTags.includes(tag.name)}
                            onChange={() => handleCheckboxChange(tag.name)}
                        />
                        <HoverLabel text={tag.name} hoverText={tag.description}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RangeQuizQuestion(props: { question: QuizQuestion }) {
    const question = props.question as QuizQuestion;
    const tag = props.question.data as Tag;

    const [weight, setWeight] = useState<number>(0);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">{question.label}</h2>
            <p className="text-gray-600 mb-4">{question.description}</p>

            <div className="flex flex-col space-y-4">
                <HoverLabel text={tag.name} hoverText={tag.description}/>
                <div className="flex flex-row space-x-5 justify-center items-center">
                    <div>0</div>
                    <RangeSlider
                        min={0}
                        max={5}
                        step={1}
                        value={[weight]}
                        formatValue={(i) => `${i}`}
                        label={tag.name}
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
