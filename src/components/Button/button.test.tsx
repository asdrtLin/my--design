import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("测试按钮组件", () => {
  it("测试默认按钮组件渲染", () => {
    // 渲染组件
    render(<Button>Nice</Button>);
    // 获取文案为Nice的元素
    const element = screen.getByText("Nice");
    // 元素是否在文档中
    expect(element).toBeInTheDocument();
    // 元素标签是否是按钮
    expect(element.tagName).toEqual("BUTTON");
    // 元素样式是否是 btn btn-default
    expect(element).toHaveClass("btn btn-default");
  });
  it("测试props按钮组件渲染", () => {});
  it("测试a标签按钮组件渲染", () => {});
  it("测试禁用按钮组件渲染", () => {});
});
