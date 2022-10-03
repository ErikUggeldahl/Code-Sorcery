import { visit } from "unist-util-visit";
import { h } from "hastscript";

export default function LessonSectionDirective() {
  return (tree, file) => {
    let index = 0;
    visit(tree, { name: "LessonSection" }, (node) => {
      // if (node.type !== "containerDirective") {
      //   file.fail("LessonSection must be a container.", node);
      // }

      // console.log("Visiting: ", node);

      const data = node.data || (node.data = {});
      data.hName = "LessonSection";
      data.hProperties = {
        ...h("LessonSection", node.attributes).properties,
        index,
        // index: { type: "mdxJsxAttribute", name: "id", value: index },
      };
      index++;

      // console.log("After visiting: ", node);
    });
  };
}
