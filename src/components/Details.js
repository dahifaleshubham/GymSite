import React from 'react'
import style from "./Details.module.css";



const Details = () => {
  return (
    <div className={style.section3}>
<section >
                <h1 className="text-center my-2">Compare Plans</h1>
                <div className="container plantable"/>
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th></th><th>Free</th>
                          <th>Pro</th>
                          <th>Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="text-start">Public</th>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">Private</th>
                          <td>-</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
              
                      <tbody>
                        <tr>
                          <th scope="row" className="text-start">Permissions</th>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">Sharing</th>
                          <td>-</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">Unlimited members</th>
                          <td>-</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">Extra security</th>
                          <td>-</td>
                          <td>-</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                    </table>
            </section>

    </div>
  )
}

export default Details