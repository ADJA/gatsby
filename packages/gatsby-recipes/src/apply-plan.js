const render = require(`./renderer`)

module.exports = async (context, cb) => {
  const stepAsMdx = [...context.steps, ...context.exports].join(`\n`)

  try {
    // XXX: Too many arguments to the render function
    const result = await render(stepAsMdx, cb, context.inputs, true)
    console.log({ result })
    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}
