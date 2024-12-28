import {Component, DispatchWithoutAction, ReactNode, useCallback, useReducer, useState} from "react";
import {Bars2Icon, ChevronDoubleDownIcon, ChevronDoubleUpIcon} from "@heroicons/react/24/outline";
import Pagination from "@/Components/Buttons/pagination";

export abstract class FilterNode<T> extends Component {
    public constructor() {
        super({});
    }

    public abstract check(value: T): boolean;

    public abstract renderWithDispatch(update: DispatchWithoutAction): ReactNode;
}

export interface ColumnFactory<T> {
    header: JSX.Element;
    render: (value: T) => ReactNode;
    filterNode?: FilterNode<T>;
    compare?: (t1: T, t2: T) => number;
}

export type TableProps<T> = {
    values: T[];
    columnFactories: ColumnFactory<T>[];
    customID?: string;
};

enum Order {
    ASC = 1,
    DESC = -1,
    NONE = 0,
}

export default function Table<T>(props: TableProps<T>) {
    const [_, update] = useReducer((x) => x + 1, 0);

    const pageSize = 10;
    const [page, setPage] = useState(0);

    const [orderMap, setOrderMap] = useState<Map<number, Order>>(new Map<number, Order>());

    function getOrder(index: number): Order {
        return orderMap.get(index) || Order.NONE;
    }

    function advanceOrder(index: number) {
        const order = getOrder(index);
        switch (order) {
            case Order.NONE:
                return Order.ASC;
            case Order.ASC:
                return Order.DESC;
            case Order.DESC:
                return Order.NONE;
        }
    }

    function setOrder(index: number, order: Order) {
        const newOrderMap = new Map<number, Order>(orderMap);
        newOrderMap.set(index, order);
        setOrderMap(newOrderMap);
    }

    function orderIcon(order: Order) {
        const iconSize = "w-4 h-4 hover:cursor-pointer";
        switch (order) {
            case Order.NONE:
                return <Bars2Icon className={iconSize}/>
            case Order.ASC:
                return <ChevronDoubleUpIcon className={iconSize}/>
            case Order.DESC:
                return <ChevronDoubleDownIcon className={iconSize}/>
        }
    }

    function combinedCompare(a: T, b: T): number {
        for (let i = 0; i < props.columnFactories.length; i++) {
            const columnFactory = props.columnFactories[i];
            if (columnFactory.compare) {
                const compare = columnFactory.compare(a, b) * getOrder(i);
                if (compare !== 0) {
                    return compare;
                }
            }
        }
        return 0;
    }

    function shouldRender(value: T): boolean {
        return props.columnFactories.every((columnFactory) => {
            if (columnFactory.filterNode) {
                return columnFactory.filterNode.check(value);
            }
            return true;
        });
    }

    const toRender = props.values.filter(shouldRender);
    const customId = props.customID || "tableBase";

    return (
        <div id={customId}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    {props.columnFactories.map((columnFactory, i) => (
                        <td key={`thead_${i}`} className="px-6 py-3">
                            <div className="flex flex-row justify-center space-x-2">
                                {columnFactory.header}
                                {columnFactory.compare && <div
                                    onClick={() => {
                                        setOrder(i, advanceOrder(i));
                                    }}
                                >
                                    {orderIcon(getOrder(i))}
                                </div>}
                            </div>
                        </td>
                    ))}
                </tr>
                <tr>
                    {props.columnFactories.map((columnFactory, i) => {
                        if (columnFactory.filterNode) {
                            return (
                                <th key={`filter_${i}`}>
                                    {columnFactory.filterNode.renderWithDispatch(update)}
                                </th>
                            );
                        }
                        return <th key={`filter_${i}`}></th>;
                    })}
                </tr>
                </thead>
                <tbody className="space-y-2">
                {toRender.length === 0 && (
                    <tr>
                        <td colSpan={props.columnFactories.length} className="text-center">
                            Geen items gevonden
                        </td>
                    </tr>

                )}
                {toRender.sort(combinedCompare).slice(page * pageSize, (page + 1) * pageSize).map((value, i) => {
                    return (
                        <tr key={`value_${i}`} className="bg-white border-b">
                            {props.columnFactories.map((columnFactory, j) => (
                                <td
                                    key={`value_${i}_column_${j}`}
                                    className={
                                        i == 0
                                            ? "px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            : "px-6 py-4"
                                    }
                                >
                                    {columnFactory.render(value)}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {props.values.length > pageSize && <Pagination
                onPageChange={(p) => {
                    setPage(p)
                }}
                totalItems={toRender.length}
                currentPage={page}
                itemsPerPage={pageSize}
            />}
        </div>
    );
}
