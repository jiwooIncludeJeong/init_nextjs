const defaultTemplate = (
  { imports, componentName, jsx, exports },
  { tpl },
) => {
  // const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
  const IconComponentName = componentName.slice(3);

  return tpl`
    ${imports}
    import type { IconProps } from '@assets/iconProps'

    const ${IconComponentName} = (props: IconProps) => ${jsx};
    export default ${IconComponentName};
  `;
}
module.exports = defaultTemplate;
