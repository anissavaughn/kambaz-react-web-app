export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                <textarea id="wd-description" cols={30} rows={10}>
                    The assignment is available online Submit a link to the landing page of
                </textarea>
                <br />
                <table>
                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-points">Points</label></td>
                        <td><input id="wd-points" value={100} /></td>
                    </tr><br/>

                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label></td>
                        <td>
                            <select id="wd-group">
                                <option selected value="hw">ASSIGNMENTS</option>
                                <option value="quiz">QUIZZES</option>
                                <option value="project">PROJECT</option>
                                <option value="exam">EXAM</option>
                            </select>
                        </td>
                    </tr><br/>

                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option selected value="percent">Percentage</option>
                                <option value="letter">Letter</option>
                            </select>
                        </td>
                    </tr><br/>

                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td>
                        <td>
                            <select id="wd-submission-type">
                                <option selected value="online">Online</option>
                                <option value="in-person">In Person</option>
                            </select>
                        </td>
                    </tr><br/>

                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-entry-optins">Online Entry Options</label></td>
                        <td>
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr><br/>

                    <tr>
                        <td></td>
                        <td align="left" valign="top"><label htmlFor="wd-assign-to">Assign to</label></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input id="wd-assign-to" value={'Everyone'} /></td>
                    </tr><br/>

                    <tr>
                        <td></td>
                        <td align="left" valign="top"><label htmlFor="wd-due-date">Due</label></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="date" value="2024-05-13" id="wd-due-date" /></td>
                    </tr><br/>

                    <tr>
                        <td></td>
                        <td align="left" valign="top"><label htmlFor="wd-available from">Available from</label></td>
                        <td align="left" valign="top"><label htmlFor="wd-available-until">Until</label></td>
                        
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type="date" value="2024-05-06" id="wd-available-from" /></td>
                        <td><input type="date" value="2024-05-20" id="wd-available-until" /></td>
                    </tr><br/>

                </table>

                <button type="button" id="wd-cancel"> Cancel </button>
                <button type="button" id="wd-save"> Save </button>
                
        </div>
        
    );
}
