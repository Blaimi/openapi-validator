import expect from "expect"
import { validate } from "../../../../../src/plugins/validation/swagger2/semantic-validators/walker-ibm"

describe("validation plugin - semantic - walker-ibm", () => {

  it("should return an error when description is empty", () => {

    const config = {
      "walker" : {
        "no_empty_descriptions" : "error"
      }
    }

    const spec = {
      "paths": {
        "/pets": {
          "get": {
            "parameters": [
              {
                "name": "tags",
                "in": "query",
                "description": "",
                "type": "string"
              }
            ]
          }
        }
      }
    }

    let res = validate({ jsSpec: spec }, config)
    expect(res.errors.length).toEqual(1)
    expect(res.errors[0].path).toEqual(["paths", "/pets", "get", "parameters", "0", "description"])
    expect(res.errors[0].message).toEqual("Items with a description must have content in it.")
    expect(res.warnings.length).toEqual(0)
  })

  it("should return an error when description contains whitespace", () => {
    
    const config = {
      "walker" : {
        "no_empty_descriptions" : "error"
      }
    }

    const spec = {
      "paths": {
        "/pets": {
          "get": {
            "parameters": [
              {
                "name": "tags",
                "in": "query",
                "description": "   ",
                "type": "string"
              }
            ]
          }
        }
      }
    }

    let res = validate({ jsSpec: spec }, config)
    expect(res.errors.length).toEqual(1)
    expect(res.errors[0].path).toEqual(["paths", "/pets", "get", "parameters", "0", "description"])
    expect(res.errors[0].message).toEqual("Items with a description must have content in it.")
    expect(res.warnings.length).toEqual(0)
  })

  it("should not complain about anything when x-sdk-exclude is true", () => {
    
    const config = {
      "walker" : {
        "no_empty_descriptions" : "error"
      }
    }

    const spec = {
      "paths": {
        "/pets": {
          "get": {
            "x-sdk-exclude": true,
            "parameters": [
              {
                "name": "tags",
                "in": "query",
                "description": "   ",
                "type": "string"
              }
            ]
          }
        }
      }
    }

    let res = validate({ jsSpec: spec }, config)
    expect(res.errors.length).toEqual(0)
    expect(res.warnings.length).toEqual(0)
  })

  it("should not return an error when bad description is in extension", () => {
    
    const config = {
      "walker" : {
        "no_empty_descriptions" : "error"
      }
    }

    const spec = {
      "x-vendor-paths": {
        "/pets": {
          "get": {
            "parameters": [
              {
                "name": "tags",
                "in": "query",
                "description": "   ",
                "type": "string"
              }
            ]
          }
        }
      }
    }

    let res = validate({ jsSpec: spec }, config)
    expect(res.errors.length).toEqual(0)
    expect(res.warnings.length).toEqual(0)
  })
})
